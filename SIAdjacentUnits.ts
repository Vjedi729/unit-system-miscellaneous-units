
/*
From https://en.wikipedia.org/wiki/Non-SI_units_mentioned_in_the_SI

minute              min     time 	                    1 min = 60 s
hour                h       time 	                    1 h = 60 min = 3 600 s
day                 d       time 	                    1 d = 24 h = 1440 min = 86 400 s
astronomical unit   au 	    length 	                    1 au = 149 597 870 700 m
degree              °       plane angle                 1° = (π/180) rad
arcminute           ′       plane angle                 1′ = (1/60)° = (π/10 800) rad
arcsecond           ″       plane angle                 1″ = (1/60)′ = (1/3 600)° = (π/648 000) rad
hectare             ha      area 	                    1 ha = 1 hm2 = 10 000 m2
litre               l, L    volume 	                    1 l = 1 dm3 = 1 000 cm3 = 0.001 m3
tonne               t       mass 	                    1 t = 1 Mg = 1 000 kg
dalton              Da      mass 	                    1 Da = 1.66053906660(50)×10−27 kg[2][note 1]
electronvolt        eV      energy 	                    1 eV = 1.602176634×10−19 J
neper               Np      logarithmic ratio quantity 	—
bel, decibel        B, dB 	logarithmic ratio quantity 	— 
*/

import Unit, {RelativeUnit, CombinationUnit, UnitNameConstruct} from "@goggles/unit-system";
import SIUnits from '@goggles/unit-system-si-units'

let siAdjacentUnits: Record<string, Unit> = {}

siAdjacentUnits.minute =    RelativeUnit.MultipleOf(SIUnits.second, 60,         new UnitNameConstruct('minute', 'min'))
siAdjacentUnits.hour =      RelativeUnit.MultipleOf(siAdjacentUnits.minute, 60, new UnitNameConstruct('hour', 'hr'))
siAdjacentUnits.day =       RelativeUnit.MultipleOf(siAdjacentUnits.hour, 24,   new UnitNameConstruct('day', 'd'))

siAdjacentUnits.astronomicalUnit = RelativeUnit.MultipleOf(SIUnits.meter, 149597870700, new UnitNameConstruct('astronomical unit'))

siAdjacentUnits.degree =        RelativeUnit.FractionOf(SIUnits.radian, 180/Math.PI,    new UnitNameConstruct('degree', '°'))
siAdjacentUnits.arcminute =     RelativeUnit.FractionOf(siAdjacentUnits.degree, 60,     new UnitNameConstruct('arcminute', "′"))
siAdjacentUnits.arcsecond =     RelativeUnit.FractionOf(siAdjacentUnits.arcminute, 60,  new UnitNameConstruct('arcsecond', '″'))

siAdjacentUnits.hectare =   new CombinationUnit([[SIUnits.hectometer, 2]],                  new UnitNameConstruct('hectare', 'ha'))
siAdjacentUnits.litre =     new CombinationUnit([[SIUnits.decimeter, 3]],                   new UnitNameConstruct('liter', 'L'))
siAdjacentUnits.tonne =     RelativeUnit.MultipleOf(SIUnits.kilogram, 1000,                 new UnitNameConstruct('tonne', 't'))
siAdjacentUnits.dalton =    RelativeUnit.MultipleOf(SIUnits.kilogram, 1.66053906660e-27,    new UnitNameConstruct('dalton', 'Da'))
siAdjacentUnits.electronvolt = RelativeUnit.MultipleOf(SIUnits.joules, 1.602176634e-19,     new UnitNameConstruct('electronvolt', 'eV'))

// TODO: Add neber, bell, and decibel