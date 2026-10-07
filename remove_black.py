from PIL import Image
img = Image.open('public/flat_flower_black.jpg').convert('RGBA')
data = img.getdata()
new_data = []
for r, g, b, a in data:
    brightness = max(r, g, b)
    if brightness < 80:
        new_alpha = int((brightness / 80.0) * 255)
        new_data.append((r, g, b, new_alpha))
    else:
        new_data.append((r, g, b, 255))
img.putdata(new_data)
img.save('public/flat_flower_nobg.png', 'PNG')
