import MenuPersonal from './MenuPersonal.jsx'
import MenuCustomize from './MenuCustomize.jsx'
import MenuEducation from './MenuEducation.jsx'
import MenuBusiness from './MenuBusiness.jsx'

export default function MenuContent({description, tabIndex}) {
	switch (tabIndex) {
		case 0:
			return <>
				<p>{description}</p>
				<MenuPersonal />
			</>
		case 1:
			return <>
				<p>{description}</p>
				<MenuEducation />
			</>
		case 2:
			return <>
				<p>{description}</p>
				<MenuBusiness />
			</>
		case 3:
			return <>
				<p>{description}</p>
				<MenuCustomize />
			</>
		default:
			break
	}



	return <div>
		
	</div>
}