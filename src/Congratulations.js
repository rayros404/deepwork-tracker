import React from 'react'

export default function Congratulations(props){
    return (
        <div className='modal fade' id='completeModal' tabIndex='-1' aria-labelledby='completeTitle' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered' role='document'>
                <div className='modal-content'>
                    <div className='modal-header bg-success text-white'>
                        <div className='modal-title' id='completeTitle'>Congratulations!</div>
                        <button className='btn-close btn-close-white' type='button' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className="modal-body">
                        <div className='text-center'>
                            You completed a Roosevelt Sprint! Here's the progress you've made so far:
                        </div>
                        <hr />
                        <div className='container '>
                            <div className='total-hours stats-font text-center'>{props.totalHours}</div>
                            <div className='total-hours-label text-center'>Total Hours</div>
                            <div className='completed-sprints stats-font text-center mt-4'>{props.numberCompletedSprints}</div>
                            <div className='completed-sprints-label text-center'>Completed Sprints</div>
                            <div className='average-hours stats-font text-center mt-4'>{props.avgHours.toFixed(1)}</div>
                            <div className='average-hours-label text-center mb-4'>Average Hours per Sprint</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}