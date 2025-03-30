import MenuPersonal from './MenuPersonal.jsx'
import MenuCustomize from './MenuCustomize.jsx'
import MenuEducation from './MenuEducation.jsx'
import MenuBusiness from './MenuBusiness.jsx'

export default function MenuContent({description, tabIndex, collectMenuData}) {
	switch (tabIndex) {
		case 0:
			return <>
				<p>{description}</p>
				<MenuPersonal handleMenuData={collectMenuData} />
			</>
		case 1:
			return <>
				<p>{description}</p>
				<MenuEducation handleMenuData={collectMenuData} />
			</>
		case 2:
			return <>
				<p>{description}</p>
				<MenuBusiness handleMenuData={collectMenuData} />
			</>
		case 3:
			return <>
				<p>{description}</p>
				<MenuCustomize handleMenuData={collectMenuData} />
			</>
		default:
			break
	}



	return <div>
		
	</div>
}