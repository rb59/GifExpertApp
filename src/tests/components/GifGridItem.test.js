import React from 'react';
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas en GifGridItem', () => {

    const title = 'test';
    const url= 'https://imagen.test';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe renderizar el componente correctamente', () => {

        
        

        expect(wrapper).toMatchSnapshot();

    });

    test('debe tener un parrafo con el titulo', () => {

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
        
    });

    test('debe tener url y alt correctos', () => {

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
        
    });

    test('debe tener la clase animate__fadeIn', () => {

        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true);
        
    });
    
    
});
