import Button from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from './InputComponent/InputComponent';   


const ButtonWithInputAndSearch = ({
  size,
  placeholder,
  textButton,
  bordered,
  backgroundColorInput,
  backgroundColorButton,
  colorButton,
  // ...otherProps
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput   
 }}
      />
      <ButtonComponent    

        size={size}
        styleButton={{
          backgroundColor: backgroundColorButton,
          border: bordered && 'none',
        }}
        icon = {<SearchOutlined color={colorButton} style={{color : '#fff'}} />}
        textButton = {textButton}
        styleTextButton = {{colorButton}}
      />
       
    </div>
  );
};

export default ButtonWithInputAndSearch;