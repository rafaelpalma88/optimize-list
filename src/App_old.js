import { useEffect, useState } from 'react';

var qtd = 100;
var items = [];

for (var i = 0; i <= qtd; i++) {
	var new_item = {
		id: i,
		name: 'item ' + i
	};
	items.push({
		name: new_item.name,
		id: new_item.id
	});
}

const ListItems = ({ listItems }) => {
	const [list, setList] = useState();
	const [filter, setFilter] = useState();

	useEffect(() => {
		var newList = [];
		console.log(listItems[0].name);
		if (listItems.length > 0) {
			for (i = 0; i <= listItems.length; i++) {
				if (listItems[i]?.name.includes(filter)) {
					newList.push({
						name: listItems[i].name,
						id: listItems[i].id
					});
				}
			}
		}
		setList(newList);
	}, [listItems, filter]);

	return (
		<div>
			<input value={filter} onChange={(e) => setFilter(e.target.value)} />
			<ul>
				{list?.map((item) => {
					return <li>{item?.name}</li>;
				})}
			</ul>
		</div>
	);
};

function App() {
	return <ListItems listItems={items} />;
}

export default App;