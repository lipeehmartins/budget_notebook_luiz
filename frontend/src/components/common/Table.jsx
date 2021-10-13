import React from 'react'

export const Table = () => {
    return (
        <div>
            <div class="table-actions">
                <div class="table-container">
                    <div class="content">
                        <div class="date">
                            <div class="header-p">
                                <p>Date</p>
                            </div>
                            <p>09/01/2021</p>
                            <p>09/01/2021</p>
                            <p>09/01/2021</p>
                            <p>09/01/2021</p>
                            <p>09/01/2021</p>
                            <p>09/01/2021</p>

                        </div>
                        <div class="item">
                            <div class="header-p">
                                <p>Items</p>
                            </div>
                            <p>Meat</p>
                            <p>Garbage</p>
                            <p>Chocolate</p>
                            <p>Salary</p>
                            <p>Cheese</p>
                            <p>Bread</p>
                        </div>
                        <div class="costs">
                            <div class="header-p">
                                <p>Cost</p>
                            </div>
                            <p>- $4</p>
                            <p>+ $60.000</p>
                            <p>- $5</p>
                            <p>- $10</p>
                            <p>- $9</p>
                            <p>- $10</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="pages">
                <a href="#">Previus</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">Next</a>
            </div>
        </div>
    )
}
