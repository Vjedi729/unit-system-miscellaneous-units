import Unit, {UnitShape, BaseSIUnit, RelativeUnit} from '@goggles/unit-system'

/*

If you want to have a dimension for rotation, these are some units. 
They are not compatible with the dimensionless version of the radian defined in the SI.

Based on opinions from here:
https://www.reddit.com/r/learnmath/comments/7ex569/are_radians_actually_a_unitless_quantity/
https://www.physicsforums.com/threads/radian-unit-why-neglected-in-dimensional-analysis.935400/
https://nvlpubs.nist.gov/nistpubs/jres/66B/jresv66Bn3p97_A1b.pdf

*/

// Units referenced from https://en.wikipedia.org/wiki/Angle
let rotationUnits: Record<string, Unit> = {}

rotationUnits.fullRotation = new BaseSIUnit(new UnitShape("Rotation"), 'full rotation', 'turn', ['full rotation', 'rotation', 'turn'])

// Common unit in math and computers 
rotationUnits.radian =      RelativeUnit.FractionOf(rotationUnits.fullRotation, 2*Math.PI, 'radian', 'rad')

// Common0use unit historically
rotationUnits.degree =      RelativeUnit.FractionOf(rotationUnits.fullRotation, 360, 'degree', '°', ['°', 'deg', 'degree'])
rotationUnits.arcminute =   RelativeUnit.FractionOf(rotationUnits.degree, 60, 'arcminute', "′")
rotationUnits.arcsecond =   RelativeUnit.FractionOf(rotationUnits.arcminute, 60, 'arcsecond', '″')

// Commonly used for astronomy, navigation, survey, and/or military purposes
rotationUnits.gradian =     RelativeUnit.FractionOf(rotationUnits.fullRotation, 400, 'gradian', 'grad', ['gon', 'grad', 'gradian', 'grade'])

rotationUnits.hourAngle =       RelativeUnit.FractionOf(rotationUnits.fullRotation, 24, 'hour angle')
rotationUnits.compassPoint =    RelativeUnit.FractionOf(rotationUnits.fullRotation, 32, 'compass point', 'point')
rotationUnits.milliradian =     RelativeUnit.FractionOf(rotationUnits.radian, 1000, 'milliradian', 'mrad')
rotationUnits.milNATO =         RelativeUnit.FractionOf(rotationUnits.fullRotation, 6400, 'NATO mil', 'mil')

// Used to represent angle as a single byte
rotationUnits.binaryDegree =    RelativeUnit.FractionOf(rotationUnits.fullRotation, 256, 'binary degree')

export var RotationUnits = rotationUnits