import './AddTaskForm.css'

import Input from '../../UI/Input/Input'
import ButtonGreen from '../../UI/ButtonGreen/ButtonGreen'
import ButtonBorderGreen from '../../UI/ButtonBorderGreen/ButtonBorderGreen'
import InputMultiLine from '../../UI/InputMultiLine/InputMultiLine'

const AddTaskForm = () => {
  return (
    <div className='AddTaskForm-container'>

          <div className='titleTaskDataTask-container'>
              <div className='titleTask-container'>
                <label htmlFor="titleTaskInput">Titulo</label>
                  <Input width={200}
                  type="text" 
                  id='titleTaskInput' 
                  placeholder='Titulo'/> 
              </div>
            
              <div className='dataTask-container'>
                <label htmlFor="dateTaskInput">Fecha</label>
                <Input width={100}
                type="text" 
                id='dateTaskInput' 
                placeholder='MM/DD/YYYY'/>
              </div>
            </div>
        
            <div className='typeTaskBriefDecriptionTask-container'>
              <div className='typeTask-container'>
                <label htmlFor="typeTaskInput">Tipo de tarea</label>
                <Input 
                width={100}
                type="text" 
                id='typeTaskInput' 
                placeholder='Tipo de tarea'/>
              </div>
            
              <div className='briefDescriptionTask-container'>
                <label htmlFor="briefDescriptionTaskInput">Descripcion breve</label>
                <Input width={200}
                type="text" 
                id='briefDescriptionTaskInput' 
                placeholder='Descripcion breve de la tarea'/>
              </div>
            </div>

            <div className='descriptionTask-container'>
              <label htmlFor="descriptionTaskInput">Descripcion</label>
              <InputMultiLine width={320}
                      height={100}
              id='descriptionTaskInput' 
              placeholder='Descripcion de la tarea'/>
        </div>

        <div className='buttonsAddCancelTask-container'>
          <ButtonGreen width={100} height={30}>Agregar</ButtonGreen>
          <ButtonBorderGreen width={100} height={30} moreStyle={{marginLeft: '10px'}}>Cerrar</ButtonBorderGreen>
        </div>
    </div>
  )
}

export default AddTaskForm