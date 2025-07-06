import React from 'react';
type Props = {
    product: any
}
const TabSpecification = (props: Props) => {
    const { product } = props;
    const figure: any[] = product.productFigure
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
                </tbody>
            </table>
        </div>
    )
}

export default TabSpecification;
