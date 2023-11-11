import React from 'react';


const StepProgres = ({
    activeStepFromChild1, checkStepFromChild1, inactiveStepFromChild1,
    activeStepFromChild2, checkStepFromChild2, inactiveStepFromChild2,
    activeStepFromChild3, checkStepFromChild3, inactiveStepFromChild3,
    activeStepFromChild4, checkStepFromChild4, inactiveStepFromChild4 }) => {

        console.log('activeStepFromChild1, checkStepFromChild1, inactiveStepFromChild1',activeStepFromChild1, checkStepFromChild1, inactiveStepFromChild1)
        console.log('activeStepFromChild2, checkStepFromChild2, inactiveStepFromChild2',activeStepFromChild2, checkStepFromChild2, inactiveStepFromChild2)
        console.log('activeStepFromChild3, checkStepFromChild3, inactiveStepFromChild3',activeStepFromChild3, checkStepFromChild3, inactiveStepFromChild3)
        console.log('activeStepFromChild4, checkStepFromChild4, inactiveStepFromChild4',activeStepFromChild4, checkStepFromChild4, inactiveStepFromChild4)


return (
    <div className='container'>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row mt-4 mb-6">
                            <div className='col-3 pl-6'>
                                { 
                                    activeStepFromChild1  &&
                                        <img src="react_components/dashboard/src/icons/active_step1_icon.svg"/>
                                }
                                { 
                                    (activeStepFromChild1 === false && checkStepFromChild1) &&
                                        <img src="react_components/dashboard/src/icons/check_step1_icon.svg"/> 
                                }
                                <img className='ml-1' style={{position:'relative', width:'180px'}} src="react_components/dashboard/src/icons/step1_line_icon.svg"/>
                                <div style={{ color: '#47BBC6', position:'relative'}}>STEP 1</div>
                                <div style={{ color: '#47BBC6', position:'relative', bottom: '5px',fontWeight: 'bold'}}>Profile</div>
                            </div>
                            <div className='col-3'>
                                { 
                                    (inactiveStepFromChild2  && activeStepFromChild2  === false ) &&
                                        <img src="react_components/dashboard/src/icons/inactive_step2_icon.svg"/>
                                }
                                { 
                                    activeStepFromChild2  &&
                                    <img src="react_components/dashboard/src/icons/active_step2_icon.svg"/>
                                }
                                { 
                                    (activeStepFromChild2  === false && checkStepFromChild2) &&
                                    <img src="react_components/dashboard/src/icons/check_step2_icon.svg"/>
                                }
                                <img className='ml-3' style={{position:'relative', width:'180px'}} src="react_components/dashboard/src/icons/step2_line_icon.svg"/>
                                <div style={{ color: '#067CBC', position:'relative'}}>STEP 2</div>
                                <div style={{ color: '#067CBC', position:'relative', bottom: '5px'}}>Areas of interest</div>
                            </div>
                            <div className='col-3'>
                                { 
                                    (inactiveStepFromChild3  && activeStepFromChild3  === false ) &&
                                        <img src="react_components/dashboard/src/icons/inactive_step3_icon.svg"/>
                                }
                                { 
                                    activeStepFromChild3  &&
                                    <img src="react_components/dashboard/src/icons/active_step3_icon.svg"/>
                                }
                                { 
                                    (activeStepFromChild3  === false && checkStepFromChild3) &&
                                    <img src="react_components/dashboard/src/icons/check_step3_icon.svg"/>
                                }
                                <img className='ml-3' style={{position:'relative', width:'180px'}} src="react_components/dashboard/src/icons/step3_line_icon.svg"/>
                                <div style={{ color: '#143F6A', position:'relative', }}>STEP 3</div>
                                <div style={{ color: '#143F6A', position:'relative', bottom: '5px'}}>Goals and competencies</div>
                            </div>
                            <div className='col-3'>
                                { 
                                    (inactiveStepFromChild4  && activeStepFromChild4  === false ) &&
                                        <img src="react_components/dashboard/src/icons/inactive_step4_icon.svg"/>
                                }
                                { 
                                    activeStepFromChild4  &&
                                    <img src="react_components/dashboard/src/icons/active_step4_icon.svg"/>
                                }
                                { 
                                    (activeStepFromChild3  === false && checkStepFromChild3) &&
                                    <img src="react_components/dashboard/src/icons/check_step4_icon.svg"/>
                                }
                                <img className='ml-3' style={{position:'relative', width:'180px'}} src="react_components/dashboard/src/icons/step4_line_icon.svg"/>
                                <div style={{ color: '#372BC4', position:'relative'}}>STEP 4</div>
                                <div style={{ color: '#372BC4', position:'relative', bottom: '5px'}}>Learning styles</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default StepProgres;
