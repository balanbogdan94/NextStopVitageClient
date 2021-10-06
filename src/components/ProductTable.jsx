import React from 'react';
import { useTable, useRowSelect } from 'react-table'
import './ProductTable.scss'

const ProductTable = ({onRowSelected}) => {
	const data = React.useMemo(
		() => [
			{
				col1: 'LORO PIANA SPORT COAT',
				col2: 'Jacket',
				col3: 'Hot summer',
				col4: 'Stussy',
				col5: 'M',
				col6: '266'
			},
			{
				col1: 'LORO PIANA SPORT COAT',
				col2: 'Jacket',
				col3: 'Hot summer',
				col4: 'Stussy',
				col5: 'M',
				col6: '266'
			},
			{
				col1: 'LORO PIANA SPORT COAT',
				col2: 'Jacket',
				col3: 'Hot summer',
				col4: 'Stussy',
				col5: 'M',
				col6: '266'
			},
			{
				col1: 'LORO PIANA SPORT COAT',
				col2: 'Jacket',
				col3: 'Hot summer',
				col4: 'Stussy',
				col5: 'M',
				col6: '266'
			},
			{
				col1: 'LORO PIANA SPORT COAT',
				col2: 'Jacket',
				col3: 'Hot summer',
				col4: 'Stussy',
				col5: 'M',
				col6: '266'
			}
		],
		[],
	);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Name',
				accessor: 'col1', // accessor is the "key" in the data
			},
			{
				Header: 'Category',
				accessor: 'col2',
			},
			{
				Header: 'Drop',
				accessor: 'col3',
			},
			{
				Header: 'Brand',
				accessor: 'col4',
			},
			{
				Header: 'Size',
				accessor: 'col5',
			},
			{
				Header: 'Price',
				accessor: 'col6',
			},
		],
		[],
	);


	const IndeterminateCheckbox = React.forwardRef(
		({ indeterminate, ...rest }, ref) => {
		  const defaultRef = React.useRef()
		  const resolvedRef = ref || defaultRef
	  
		  React.useEffect(() => {
			resolvedRef.current.indeterminate = indeterminate
		  }, [resolvedRef, indeterminate])
	  
		  return (
			<>
			  <input type="checkbox" ref={resolvedRef} {...rest} />
			</>
		  )
		}
	  )

	  const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		selectedFlatRows,
		state: { selectedRowIds },
	  } = useTable(
		{
		  columns,
		  data,
		  stateReducer: (newState, action, prevState) => {
			  let isSameRowSelected = false;
			  if (action.type === "toggleRowSelected") {
				  let value = {
					[action.id]: true
				  }
				  let prevValueIndex = Object.keys(prevState.selectedRowIds)
				  if(prevValueIndex && prevValueIndex[0] && prevValueIndex[0] === action.id){
					  value= {}
					  isSameRowSelected = true;
				  }
				newState.selectedRowIds = value
				
			  }
			  onRowSelected(!isSameRowSelected)
	
			  return newState;
		  },
		},
		useRowSelect,
		hooks => {
		  hooks.visibleColumns.push(columns => [
			// Let's make a column for selection
			{
			  id: 'selection',
			  // The header can use the table's getToggleAllRowsSelectedProps method
			  // to render a checkbox
			  Header: () => (
				<div>
				  <b>Select</b>
				</div>
			  ),
			  // The cell can use the individual row's getToggleRowSelectedProps method
			  // to the render a checkbox
			  Cell: ({ row }) => (
				<div>
				  <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
				</div>
			  ),
			},
			...columns,
		  ])
		}
	  )

	return (
		<table className="table-container"{...getTableProps()}>
			<thead className="table-header">
				{
					// Loop over the header rows
					headerGroups.map((headerGroup) => (
						// Apply the header row props
						<tr {...headerGroup.getHeaderGroupProps()}>
							{
								// Loop over the headers in each row
								headerGroup.headers.map((column) => (
									// Apply the header cell props
									<th {...column.getHeaderProps()}>
										{
											// Render the header
											column.render('Header')
										}
									</th>
								))
							}
						</tr>
					))
				}
			</thead>
			{/* Apply the table body props */}
			<tbody {...getTableBodyProps()}>
				{
					// Loop over the table rows
					rows.map((row) => {
						// Prepare the row for display
						prepareRow(row);
						return (
							// Apply the row props
							<tr {...row.getRowProps()}>
								{
									// Loop over the rows cells
									row.cells.map((cell) => {
										// Apply the cell props
										return (
											<td {...cell.getCellProps()}>
												{
													// Render the cell contents
													cell.render('Cell')
												}
											</td>
										);
									})
								}
							</tr>
						);
					})
				}
			</tbody>
		</table>
	);
};

export default ProductTable;
