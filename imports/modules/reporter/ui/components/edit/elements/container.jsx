import React from 'react';
import { Field, FormSection } from 'redux-form';
import Element from './element';
import { Translate, I18n } from 'react-redux-i18n';

let getTranslation = (key) => {
  return 'Accounts.edit.tabs.target.' + key;
};

const ElementsEdit = ({ fields }) => {

  return (
    <div className="ibol-tabs">
      <button type="button" className="add-tab"
              onClick={() => fields.push({ name: I18n.t('target') + ' ' + letters[fields.length] })}><i
        className="fa fa-plus" aria-hidden="true"/> Agregar Target
      </button>

      {fields.map((target, index) => (
        <div key={index}>
          <button type="button"
                  className="add-tab"
                  style={{ float: 'right', marginBottom: -40 }}
                  onClick={() => fields.remove(index)}>
            <i className="fa fa-minus" aria-hidden="true"/> Eliminar Target
          </button>

          <FormSection name={`${target}`}>
            <Element/>
          </FormSection>
        </div>
      ))}


    </div>
  );
};

export default ElementsEdit;


