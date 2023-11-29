import {
    Table
} from '@trussworks/react-uswds'
import _ from 'lodash';

// Define the structure of ecrData
interface ECRData {
    processed_values: {
        parsed_values: {
            patient_id: string;
            first_name: string;
            last_name: string;
            gender: string;
            birth_date: string;
            // Add additional fields as necessary
        };
    };
}

interface ECRTableProps {
    ecrData: ECRData;
}

export default function ECRTable({ ecrData }: ECRTableProps) {
    const options = ['patient_id', 'first_name', 'last_name', 'gender', 'birth_date']


    const getTableBody = (data: any) => {
        return (
            <tbody>
                {options.map(function (option) {
                    return (
                        <tr key={option}>
                            <th scope="row">{_.startCase(option)}</th>
                            <td>{data[option]}</td>
                        </tr>
                    );
                })}

            </tbody>
        )
    }

    return (
        <div className='margin-3'>
            <h1>eCR Viewer</h1>
            <div>
                <Table
                    bordered
                    caption="This table uses the fullWidth prop to increase to 100% width"
                    fullWidth>
                    <thead>
                        <tr>
                            <th scope="col">Field Name</th>
                            <th scope="col">Field Value</th>
                        </tr>
                    </thead>
                    {getTableBody(ecrData.processed_values.parsed_values)}
                </Table>
            </div>
        </div>
    )
}