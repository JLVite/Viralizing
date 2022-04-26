import React from 'react';
import TargetsItem from './target-item';
import { FormSection } from 'redux-form';
import { Tabs, Tab } from 'react-bootstrap';
import { Translate, I18n } from 'react-redux-i18n';

let getTranslation = (key) => {
  return 'Accounts.edit.tabs.target.' + key;
};

let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const TargetsEdit = ({ fields }) => {
  if (fields.length === 0) fields.push({ name: I18n.t('target') + ' ' + letters[fields.length] });
  window.fields = fields;
  return (
    <div className="ibol-tabs">
      <button type="button" className="add-tab"
              onClick={() => fields.push({ name: I18n.t('target') + ' ' + letters[fields.length] })}><i
        className="fa fa-plus" aria-hidden="true"/> Agregar Target
      </button>

      <Tabs defaultActiveKey={0} id="uncontrolled-tab-example" bsStyle="tabs"
            onSelect={(tab) => console.log('TAB_CHANGE', tab)}>
        {fields.map((target, index) => (
          <Tab key={index} eventKey={index}
               title={fields.get(index).name ? fields.get(index).name : (I18n.t('target') + ' ' + letters[index])}>
            <button type="button"
                    className="add-tab"
                    style={{ float: 'right', marginBottom: -40 }}
                    onClick={() => fields.remove(index)}>
              <i className="fa fa-minus" aria-hidden="true"/> Eliminar Target
            </button>

            <FormSection name={`${target}`}>
              <TargetsItem/>
            </FormSection>
          </Tab>
        ))}
      </Tabs>


    </div>
  );
};

export default TargetsEdit;

