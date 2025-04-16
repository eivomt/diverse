from colormath.color_conversions import convert_color
from colormath.color_objects import (
    LabColor,
    LCHabColor,
    SpectralColor,
    sRGBColor,
    XYZColor,
    LCHuvColor,
    IPTColor,
)
import csv
import os

from cubicBezier import yValues

def lab_to_rgb(l, a, b):
    farge = []
    """
    Conversions to RGB are a little more complex mathematically. There are also
    several kinds of RGB color spaces. When converting from a device-independent
    color space to RGB, sRGB is assumed unless otherwise specified with the
    target_rgb keyword arg.
    """

    print("=== RGB Example: Lab->RGB ===")
    # Instantiate an Lab color object with the given values.
    lab = LabColor(l, a, b)
    # Show a string representation.
    print(lab)
    # Convert to XYZ.
    rgb = convert_color(lab, sRGBColor)
    print(rgb)

    # Extract R, G, B values.
    red = int(rgb.clamped_rgb_r * 255)
    green = int(rgb.clamped_rgb_g * 255)
    blue = int(rgb.clamped_rgb_b * 255)
    
    # Print R, G, and B values separately.
    print("R (Red):", red)
    print("G (Green):", green)
    print("B (Blue):", blue)
    print("=== End Example ===\n")

    farge.append(red)
    farge.append(green)
    farge.append(blue)

    return farge



RGBlist = []
numColorBoxes = 100
bValues = yValues(numColorBoxes)

for x in range(numColorBoxes):
    l = x / 3
    a = 120
    b = 120
    RGBlist.append(lab_to_rgb(l, a, b))

csvPath = "./farger.csv"

if os.path.isfile(csvPath):
    os.remove(csvPath)

with open('farger.csv', 'w') as file:
    writer = csv.writer(file)
    fields = ['r','g','b']

    writer.writerow(fields)
    writer.writerows(RGBlist)



for x in range(numColorBoxes):
    l = x
    a = -120
    b = 120
    RGBlist.append(lab_to_rgb(l, a, b))

csvPath = "./farger2.csv"

if os.path.isfile(csvPath):
    os.remove(csvPath)

with open('farger2.csv', 'w') as file:
    writer = csv.writer(file)
    fields = ['r','g','b']

    writer.writerow(fields)
    writer.writerows(RGBlist)



for x in range(numColorBoxes):
    l = x / 3
    a = 150
    b = -100
    RGBlist.append(lab_to_rgb(l, a, b))

csvPath = "./farger3.csv"

if os.path.isfile(csvPath):
    os.remove(csvPath)

with open('farger3.csv', 'w') as file:
    writer = csv.writer(file)
    fields = ['r','g','b']

    writer.writerow(fields)
    writer.writerows(RGBlist)

