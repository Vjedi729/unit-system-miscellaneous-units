import uscsUnits from '@goggles/unit-system-common-uscs-units'
import Unit, {UnitShape, BaseSIUnit, RelativeUnit, UnitNameConstruct, CombinationUnit} from '@goggles/unit-system'
import SIUnits from '@goggles/unit-system-si-units';

let additionalUSCustomaryUnits: Record<string, Unit> = {}

additionalUSCustomaryUnits.slug = new CombinationUnit(
    [[uscsUnits.poundForce, 1], [SIUnits.second, 2], [uscsUnits.foot, -1]],
    new UnitNameConstruct("slug")
)

export var AdditionalUSCustomaryUnits = additionalUSCustomaryUnits;
export default additionalUSCustomaryUnits;