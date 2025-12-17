#!/bin/bash

# Image Optimization Script
# Resizes and compresses images for web use

SOURCE_DIR="image"
OPTIMIZED_DIR="image/optimized"

# Create optimized directory
mkdir -p "$OPTIMIZED_DIR"

echo "🖼️  Starting image optimization..."

# Function to optimize image
optimize_image() {
    local input="$1"
    local filename=$(basename "$input")
    local name="${filename%.*}"
    local output="$OPTIMIZED_DIR/$filename"
    
    # Get image dimensions
    local width=$(identify -format "%w" "$input")
    local height=$(identify -format "%h" "$input")
    
    echo "Processing: $filename (${width}x${height})"
    
    # Determine max width based on usage
    # Hero images: 1920px, Gallery/thumbnails: 1200px, Profile photos: 800px
    local max_width=1920
    
    if [[ "$filename" == "DSC08672.jpg" ]] || [[ "$filename" == "DSC08659.jpg" ]]; then
        # Profile photos - circular, smaller
        max_width=800
    elif [[ "$filename" == "DSC09316.jpg" ]]; then
        # Hero background
        max_width=1920
    else
        # Gallery images
        max_width=1200
    fi
    
    # Resize if larger than max_width, maintain aspect ratio
    if [ "$width" -gt "$max_width" ]; then
        convert "$input" \
            -resize "${max_width}x>" \
            -quality 85 \
            -strip \
            -interlace Plane \
            "$output"
    else
        # Just compress if already small enough
        convert "$input" \
            -quality 85 \
            -strip \
            -interlace Plane \
            "$output"
    fi
    
    # Get file sizes
    local original_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input" 2>/dev/null)
    local optimized_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
    local savings=$(echo "scale=1; (1 - $optimized_size / $original_size) * 100" | bc)
    
    echo "  ✅ Optimized: $(numfmt --to=iec-i --suffix=B $original_size 2>/dev/null || echo "${original_size} bytes") → $(numfmt --to=iec-i --suffix=B $optimized_size 2>/dev/null || echo "${optimized_size} bytes") (${savings}% reduction)"
}

# Process all JPG images
for img in "$SOURCE_DIR"/*.jpg; do
    if [ -f "$img" ]; then
        optimize_image "$img"
    fi
done

echo ""
echo "✨ Image optimization complete!"
echo "📁 Optimized images saved to: $OPTIMIZED_DIR"
echo ""
echo "📊 Summary:"
du -sh "$SOURCE_DIR"/*.jpg 2>/dev/null | awk '{total+=$1} END {print "Original size: ~" total "MB"}'
du -sh "$OPTIMIZED_DIR"/*.jpg 2>/dev/null | awk '{total+=$1} END {print "Optimized size: ~" total "MB"}'

