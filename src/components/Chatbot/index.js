import Post from '../SubmitForm';

const steps = [
  {
    id: '1',
    message: 'Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso do seu nome.',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    placeholder: 'Nome e Sobrenome',
    trigger: '3',
  },
  {
    id: '3',
    message: 'Que satisfação, {previousValue}, agora que sei seu nome, qual a cidade e estado que você mora?',
    trigger: 'city',
  },
  {
    id: 'city',
    user: true,
    placeholder: 'Cidade',
    trigger: '5'
  },
  {
    id: '5',
    message: 'Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?',
    trigger: 'date',
  },
  {
    id: 'date',
    user: true,
    placeholder: '00/00/0000',
    trigger: '7',
    validator: (value) => {
      if (/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/.test(value)) {
        return true;
      } else {
        return 'Digite a data em formato de numero';
      }
    }
  },
  {
    id: '7',
    message: 'Me fala teu e-mail, por gentileza',
    trigger: 'email',
  },
  {
    id: 'email',
    user: true,
    placeholder: 'E-mail',
    trigger: '9',
    validator: (value) => {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
      } else {
        return 'Digite um endereço de e-mail válido';
      }
    },
  },
  {
    id: '9',
    message: 'Avalização',
    trigger: 'submit'
  },
  {
    id: 'submit',
    options: [
      { value: 'y', label: 'Yes', trigger: 'end-message' },
      { value: 'n', label: 'No', trigger: 'no-submit' },
    ]
  },
  {
    id: 'no-submit',
    message: 'Your information was not submitted.',
    end: true,
  },
  {
    id: 'end-message',
    component: <Post />,
    asMessage: true,
    end: true,
  },
];

export default steps;