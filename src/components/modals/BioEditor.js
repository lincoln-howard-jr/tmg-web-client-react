import React from 'react'
import styles from './BioEditor.css'
import classNames from 'classnames'
import useForm from '../../hooks/useForm'
import Popup from 'reactjs-popup'

const BioEditor = () => {
    const validator = {
        description: (value) => {
          return value.length < 80;
        }
      }
      
    const onSubmit = async (validity, values) => {
        console.log (validity, values);
      }

      const {err, values, handleChange, handleSubmit} = useForm(validator, onSubmit)

    return (
      <Popup trigger={<button>Edit Description</button>} modal>
        {close => (
          <>
            <div>
              <form onSubmit={handleSubmit}>
                <label for="description">Description: </label>
                <input
                  type="text"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
              </form>
            </div>
            <a className="close" onClick={close}>
              &times;
            </a>
            <div>
              <button onClick={close}>Cancel</button>
              <input type="submit" value="Submit"/>
            </div>
          </>
        )}
      </Popup>
    );
}

export default BioEditor
