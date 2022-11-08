const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			tasks: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addTask: (tasks) => {
				const store = getStore();
					setStore({tasks: [...store.tasks, tasks] })

			},
			deleteTask: (i) => {
				/* create delete task here */
				const store = getStore();
					
				setStore({tasks: store.tasks.filter((item, index)=> {
					return index != i;
				})})

					
				//   function deleteLi(i) {
				//     setInput((current) => {
				//       return current.filter((item, index) => {
				//         return index != i;
				//       });
				//     });

			}
		}
	};
};

export default getState;
