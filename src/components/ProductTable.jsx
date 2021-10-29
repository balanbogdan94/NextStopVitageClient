import React from 'react';
import { useTable, useRowSelect } from 'react-table'
import './ProductTable.scss'
import { BiCheck, BiX } from "react-icons/bi";

const ProductTable = ({onRowSelected, data}) => {

	const columns = React.useMemo(
		() => [
			{
				Header: 'Name',
				accessor: 'title', // accessor is the "key" in the data
			},
			{
				Header: 'Drop',
				accessor: 'drop',
			},
			{
				Header: 'Category',
				accessor: 'category',
			},

			{
				Header: 'Brand',
				accessor: 'brand',
			},
			{
				Header: 'Size',
				accessor: 'sizes',
			},
			{
				id: 'sale',
				Header: 'Sale',
				accessor: d => d.isOnSale ? <BiCheck fontSize={18}/> : <BiX fontSize={18}/>
			},
			{
				Header: 'Price \n (RON)',
				accessor: 'price',
				
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
	  } = useTable(
		{
		  columns,
		  data
		},
		useRowSelect,
		hooks => {
		  hooks.visibleColumns.push(columns => [
			// Let's make a column for selection
			{
			  id: 'selection',
			  Header: () => (
				<div>
				  <b>Select</b>
				</div>
			  ),
			  Cell: ({ row, toggleRowSelected, toggleAllRowSelected }) => (
				<div>
				  <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
				</div>
			  ),
			},
			...columns,
		  ])
		}
	  )

	  React.useEffect(() => {
		  const selectedRowsIds = selectedFlatRows.map(row => row.original.id)
		  onRowSelected(selectedRowsIds)
	  }, [selectedFlatRows])

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
