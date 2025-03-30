import MenuPersonal from './MenuPersonal.jsx'
import MenuCustomize from './MenuCustomize.jsx'
import MenuEducation from './MenuEducation.jsx'
import MenuBusiness from './MenuBusiness.jsx'

export default function MenuContent({description, tabIndex, collectMenuData}) {
	const handleData = (data) => {
		const combinedFormData = {
			generalInformation: data.generalInformation,
			adressInformation: data.adressInformation,
			educationInformation: data.educationInformation,
			businessInformation: data.businessInformation,
			customization: data.customization,
		}
		
		collectMenuData(combinedFormData)
	}

	switch (tabIndex) {
		case 0:
			return <>
				<p>{description}</p>
				<MenuPersonal handleData={handleData} />
			</>
		case 1:
			return <>
				<p>{description}</p>
				<MenuEducation handleData={handleData} />
			</>
		case 2:
			return <>
				<p>{description}</p>
				<MenuBusiness handleData={handleData} />
			</>
		case 3:
			return <>
				<p>{description}</p>
				<MenuCustomize handleData={handleData} />
			</>
		default:
			break
	}



	return <div>
		
	</div>
}