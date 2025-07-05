import React from 'react';
type Props = {
    product: any
}
const TabSpecification = (props: Props) => {
    const { product } = props;
    const figure = [
        {
            key: "RAM",
            value: 128
        },
        {
            key: "ROM",
            value: 128
        }
    ]
    return (
        <div className="table-responsive">
            <table className="table table-bordered ps-table ps-table--specification">
                <tbody>
                    {
                        figure.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.key}</td>
                                    <td>{item.value}</td>
                                </tr>
                            )
                        })
                    }

                    <tr>
                        <td>Style</td>
                        <td>Ear Hook</td>
                    </tr>
                    <tr>
                        <td>Wireless</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Dimensions</td>
                        <td>5.5 x 5.5 x 9.5 inches</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>6.61 pounds</td>
                    </tr>
                    <tr>
                        <td>Battery Life</td>
                        <td>20 hours</td>
                    </tr>
                    <tr>
                        <td>Bluetooth</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabSpecification;
