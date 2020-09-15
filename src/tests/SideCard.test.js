import React from "react";
import { expect } from "chai";
import { mount, configure } from "enzyme";

import SideCard from '../components/SideCard';
import data from './data';

import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });

describe('<SideCard />', function() {
    

    let card = data[0];

    let defaultProps = {
        card : card
    };

    it('renders <SideCard /> with required props', () => {
        let wrapper = mount(<SideCard {...defaultProps} />),
            cardHeaderProps = wrapper.find('.Card__Col');

        //onsole.log( cardHeaderProps.debug());
        expect(cardHeaderProps.find('Card').exists()).to.equal(true);
    });

   it('Required Card items present', () => {
        let wrapper         = mount(<SideCard {...defaultProps} />),
            cardHeaderProps = wrapper.find('.Card__Col'),
            image           = cardHeaderProps.find('CardImg'),
            body            = cardHeaderProps.find('CardBody'),
            footer          = cardHeaderProps.find('CardFooter');

        expect(image.exists()).to.equal(true);
        expect(body.exists()).to.equal(true);
        expect(footer.exists()).to.equal(true);
    });
});
