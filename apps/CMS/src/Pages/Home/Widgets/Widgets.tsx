import WidgetLg from "./WidgetLg/WidgetLg"
import WidgetSm from "./WidgetSm/WidgetSm"

const Widgets = () => {
  return (
    <div className="flex gap-2">
      <WidgetSm />
      <WidgetLg />
    </div>
  )
}

export default Widgets