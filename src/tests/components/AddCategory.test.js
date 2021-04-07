import AddCategory from "../../components/AddCategory";
import {shallow} from 'enzyme';
import { useState } from "react";
describe('Pruebas en <AddCategory />', () => {
    
    // const [category, setCategory] = useState({});
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe cambiar la caja de texto', () => {

        
        const value = 'Hola Mundo';
        const input = wrapper.find('input');
        input.simulate('change',{ target: { value: value } });
        expect(wrapper.find('input').prop('value')).toBe(value);
        
    });

    test('No debe postear onSubmit', () => {

        const form = wrapper.find('form');
        form.simulate('submit',{ preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe llamar el setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        input.simulate('change',{ target: {value: "Hola Mundo"} });
        wrapper.find('form').simulate('submit',{ preventDefault(){} });;
        
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });

    
    
    

});
