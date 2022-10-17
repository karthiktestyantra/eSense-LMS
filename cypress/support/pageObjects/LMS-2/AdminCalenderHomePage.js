class AdminCalenderHomePage{
    getCreateNewBtn(){
        return cy.get('.calendarMeetingBtn button')
    }
    getAppointmentBtn(){
        return cy.get('div.calendar-list-title').contains('Appointments')
    }
    getEnterAppointmentTitlefield(){
        return cy.get('input.css-mnn31')
    }
    getCreateApointmentAddPeopleLink(){
        return cy.get('button.css-1ujsas3')
    }
    getCreateApointmentTeacherTab(){
        return cy.get('button.css-1q2h7u5').contains('Teachers')
    }
    getCreateAppointmentTeacherSearchField(){
        return cy.get('input.css-7g5oui')
    }
    getCreateAppointmentTeacherCheckbox(){
        return cy.get('div.stdDialSrchRstList input').eq(0)
    }
    getCreateAppointmentCloseLink(){
        return cy.get('button.css-1ujsas3')
    }
    getCreateApointmentDate(){
        return cy.get('div.css-1bn53lx').eq(0)
    }
    getCreateApointmentDateselect(day){
        return cy.get('button.MuiPickersDay-dayWithMargin').contains(day)
    }
    getCreateAppointmentStartTime(){
        return cy.get('div.css-1bn53lx').eq(1)
    }
    getCreateAppointmentStartTimeing(){
        return cy.get('[aria-label="6 hours"]')
    }
    getCreateAppointmentStartTimeingAM(){
        return  cy.get('span.css-1v2gfp5').contains('AM')
    }
    getCreateAppointmentEndTime(){
        return cy.get('div.css-1bn53lx').eq(2)
    }
    getCreateAppointmentEndTimeing(){
        return cy.get('[aria-label="6 hours"]')
    }
    getCreateAppointmentEndTimeingPM(){
        return  cy.get('span.css-1v2gfp5').contains('PM')
    }
    getCreateAppointmentRemindDropdown(){
        return cy.get('.MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select')
    }
    getCreateAppointmentRemindDropdownDonotremindOpt(){
        return cy.get('.MuiList-root > [tabindex="0"]')
    }
    getCreateAppointmentAddDescription(){
        return cy.get('.textAreaReminder')
    }
    getCreateAppointmentAppointmentTypeDropdown(){
        return cy.get('.css-tzsjye').eq(1)
    }
    getCreateAppointmentAppointmentType(){
        return cy.get('.MuiFormControl-root > :nth-child(2) > .MuiOutlinedInput-root > #demo-simple-select').eq(0)
    }
    getCreateAppointmentAppointmentTypeOnlineOpt(){
        return cy.get('li[data-value="ONLINE"]')
    }
    getCreateAppointmentAppointmentTypeOfflineOpt(){
        return cy.get('li[data-value="OFFLINE"]')
    }
    getCreateAppointmentMeetingLink(){
        return cy.get('input[class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"]').eq(1)
    }
    getCreateAppointmentSaveAppointmentBtn(){
        return cy.contains('Save Appointment')
    }
    getAppointmentCheckbox(){
        return cy.get('input[name="Appointment"]')
    }
    getAppointmentAutomation(){
        return cy.get('strong')
    }
    getCreateAppointmentXBtn(){
        return cy.get('.report-wrapper > [data-testid="CloseIcon"]')
    }
    getAppointmentEditAppointmentBtn(){
        return cy.get('button.liveClsMdlViewActionEditBtn ')
    }
    getAppointmentDeleteAppointmentBtn(){
        return cy.get('button.liveClsMdlViewActionDeletBtn ')
    }
    getAppointmentSaveAppointmentBtn(){
        return cy.get('button.reminder_prime_btn')
    }
    getAppointmentCancelAppointmentBtn(){
        return cy.get('button.appointmentModalCancelBtn ')
    }
    getDeletePopupDeleteAppointmentBtn(){
        return cy.get('button.dlt_prime-delete')
    }
    getDeletePopupCancelAppointmentBtn(){
        return cy.get('button.dlt_outline ')
    }
    getDeletePopupXBtn(){
        return cy.get('.close-icon_delete_reminder')
    }
    getCreateAppointmentAttendeesCount(){
        return cy.get('.crtLivePplList  span')
    }
    getCreateAppointmentAdminBtn(){
        return cy.get('.MuiTab-textColorPrimary').eq(2)
    }
    getCreateAppoinmentAdminList(){
        return cy.get('[class="d-flex txtcenter"]')
    }
    getCreateAppointmentDateTextfield(){
        return cy.get('input.MuiInputBase-inputAdornedEnd').eq(0)
    }
    getCreateAppointmentStartTimeTextfield(){
        return cy.get('input.MuiInputBase-inputAdornedEnd').eq(1)
    }
    getCreateAppointmentEndTimeTextfield(){
        return cy.get('input.MuiInputBase-inputAdornedEnd').eq(2)
    }
    getCreateAppointmentLocationDropdown(){
        return cy.get(':nth-child(8) > .MuiFormControl-root > :nth-child(2) > .MuiOutlinedInput-root > #demo-simple-select')
    }
    getCreateAppointmentLocationRoomList(){
        return cy.get('li.MuiButtonBase-root')
    }
    getCreateAppointmentLocationOfficeOpt(){
        return cy.contains('office')
    }
    getCreateAppointmentStudentTab(){
        return cy.get('.MuiTab-textColorPrimary').contains('Students')
    }
    getCreateAppointmentGreadsDropDown(){
        return cy.xpath('//div[@id="grouped-select"]')
    }
    getCreateAppointmentSectionsDropDown(){
        return cy.get('[id="demo-simple-select"]').eq(0)
    }
    getUploadCSVBtn(){
        return cy.get('.bulkUploadBtnOut ')
    }
    getHolidayBtnInCSVBtn(){
        return cy.get('.calendar-list-title').eq(0)
    }
    getSelectHolidayFileBtn(){
        return cy.get('input#file-input')
    }
    getImportHolidayBtn(){
        return cy.get('button.BulkUpload_bulkImport__spFpc')
    }
    getDwnloadDFileBtn(){
        return cy.get('button.BulkUpload_downloadSampleTxt__1UJTp')
    }
    getYearDrpDwnInCalendar(){
        return cy.get('button.mbsc-calendar-button span.mbsc-calendar-year')
    }
    getYearDrpDwnLst(){
        return cy.get('div[role="gridcell"] div.mbsc-calendar-year-text:visible')
    }
    getMonthDrpDwnLst(){
        return cy.get('div[role="gridcell"] div.mbsc-calendar-month-text:visible')
    }
    getMonthlyDrpDwnInCalendar(){
        return cy.get('.myCalSelFld')
    }
    getMonthlyDrpDwnLstInCalendar(){
        return cy.get('select')
    }
    getHolidayDateInCalendar(){
        return cy.get('div.mbsc-ltr div.single-day-event:visible')
    }
    getHolidayCheckBxInCalendarPage(){
        return cy.get('span.MuiCheckbox-root input[name="Holidays"]')
    }
    getCalendarDayTxt(){
        return cy.get('div[role="gridcell"] div.mbsc-calendar-day-text:visible')
    }
    getHolidayWrapperLst(){
        return cy.get('div.md-custom-event-wrapper')
    }
    getHolidayDltBtn(){
        return cy.get('button.view_reminder_delete')
    }
    getHolidayCnfrmDltBtn(){
        return cy.get('button.dlt_prime')
    }
    getHolidayEnterBtn(){
        return cy.get('.calendar-content-popover div.calendar-list-title')
    }
    getEnterHolidayTxt(){
        return cy.get('div input[placeholder="Enter Holiday Title"]')
    }
    getStartDateInCreateHolidayPopup(){
        return cy.get('input[placeholder="ddd d mmm, yyyy"]').eq(0)
    }
    getEndDateInCreateHolidayPopup(){
        return cy.get('input[placeholder="ddd d mmm, yyyy"]').eq(1)
    }
    getHolidayDescriptionTextAreaInCreateHolidayPopup(){
        return cy.get('div.MuiInputBase-multiline textarea').eq(0)
    }
    getSaveHolidayBtnInCreateHolidayPopup(){
        return cy.get('button[form="holidayForm"]')
    }
    getDateLstInCreateHolidayPopup(){
        return cy.get('button.MuiPickersDay-root:visible')
    }
}
module.exports=new AdminCalenderHomePage()