import t3 from '../Images/t3.png'
import {v4 as uuidv4} from 'uuid'

const homeData = {
	id: uuidv4(),
	image: t3,
	brand: 'Roblox',
	name: 'Roblox',
	description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
	price: '1000',
	quantity: 1
}

export default homeData;
