from PIL import Image
import sys

def remove_white_bg(input_path, output_path, tolerance=230):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = img.getdata()
        new_data = []
        for item in data:
            # If all r, g, b are above tolerance, it's near-white
            if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
                new_data.append((255, 255, 255, 0)) # transparent
            else:
                new_data.append(item)
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Successfully processed {input_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

remove_white_bg(r"C:\Users\Angel daisy\.gemini\ads P\portfolio-app\public\silver_camera.jpg", r"C:\Users\Angel daisy\.gemini\ads P\portfolio-app\public\silver_camera_nobg.png")
remove_white_bg(r"C:\Users\Angel daisy\.gemini\ads P\portfolio-app\public\pink_flower.jpg", r"C:\Users\Angel daisy\.gemini\ads P\portfolio-app\public\pink_flower_nobg.png")
remove_white_bg(r"C:\Users\Angel daisy\.gemini\ads P\portfolio-app\public\angel_flower.jpg", r"C:\Users\Angel daisy\.gemini\ads P\portfolio-app\public\angel_flower_nobg.png")
