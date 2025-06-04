import { useCallback, useState } from 'react';

const AddressForm = () => {
  const [formData, setFormData] = useState('');

  const handleChangeValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value);
  }, []);

  return (
    <form >
      <h2>Formulaire d'adresse</h2>
      <label>
        Adresse :
        <input
          type="text"
          name="adresse"
          onChange={handleChangeValue}
          value={formData}
        />
      </label>


      <button type="submit">Envoyer</button>
    </form>
  );
};


export default AddressForm;
