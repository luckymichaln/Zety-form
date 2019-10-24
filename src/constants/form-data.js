const fieldsOptions = [
  { value: 'IT', label: 'IT' },
  { value: 'Product', label: 'Product' },
  { value: 'Content', label: 'Content' }
]

const positionsOptions = [
  [
    {
      value: 'Front-end developer',
      label: 'Front-end developer'
    },
    {
      value: 'Back-end developer',
      label: 'Back-end developer'
    },
    {
      value: 'Devops',
      label: 'Devops'
    },
    {
      value: 'Webmaster',
      label: 'Webmaster'
    }
  ],
  [
    {
      value: 'Product owner',
      label: 'Product owner'
    },
    {
      value: 'UX Designer',
      label: 'UX Designer'
    },
    {
      value: 'UI Designer',
      label: 'UI Designer'
    }
  ],
  [
    {
      value: 'Junior Copywriter',
      label: 'Junior Copywriter'
    },
    {
      value: 'Senior Copywriter',
      label: 'Senior Copywriter'
    }
  ]
]

const validationMessages = {
  required: 'This fields is required',
  string: 'This field should contain only letters',
  email: 'This field should contain full email address'
}

export { fieldsOptions, positionsOptions, validationMessages };