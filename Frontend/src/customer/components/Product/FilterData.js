export const color=[
    "white",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow"
]




export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: false },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
        { value: 'yellow', label: 'Purple', checked: false },
      ],
    },
    
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'S', label: 'S', checked: false },
        { value: 'M', label: 'M', checked: false },
        { value: 'L', label: 'L', checked: false },
       
      ],
    },
  ]


  export const SingleFilter=[
    {
        id:"price",
        name:"Price",
        options: [
            {value: "159-399", label: "₹159 to ₹399"},
            {value: "399-999", label: "399 to ₹999"},
            {value: "999-1999", label: "₹999 o ₹1999"},
            {value: "1999-2999", label: "₹1999 to ₹2999"},
            {value: "2999-4999", label: "₹2999 to ₹4999"},
        ]
    },

    {
        id:"discount",
        name:"Discount Range",
        options: [
            {value: "10", label: "10% And Above"},
            {value: "20", label: "20% And Above"},
            {value: "30", label: "30% And Above"},
            {value: "40", label: "40% And Above"},
            {value: "50", label: "50% And Above"},
            {value: "60", label: "60% And Above"},
            {value: "70", label: "70% And Above"},
            {value: "80", label: "80% And Above"},
           
        ]
    },
    {
        id:"stock",
        name:"Availablity",
        options: [
            {value: "in_stock", label: "in_stock"},
            {value: "out_of_stock", label: "out_of_stock"},
           
           
        ]
    }
  ]