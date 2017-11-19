import { Injectable } from '@angular/core';

@Injectable()
export class RuleService {
    getRules() {
        return [
            {
                group: 'address',
                type: 'dropdown',
                key: 'Oregon',
                label: 'State',
                dataBinding:'root_Addr_State',
                options: [
                    { key: 'Oregon', value: 'Oregon' },
                    { key: 'Wisconsin', value: 'Wisconsin' },
                    { key: 'Colorado', value: 'Colorado' },
                    { key: 'Arizona', value: 'Arizona' }
                ],
                order: 4
            },
            {
                group: 'address',
                type: 'text',
                key: 'Street',
                label: 'Street',
                dataBinding:'root_Addr_Street',
                value: '970 SW TUALATIN',
                required: true,
                order: 1
            },
            {
                group: 'address',
                type: 'text',
                key: 'Apt',
                dataBinding: 'root_Addr_Apt',
                label: 'Apt #',
                order: 2
            },
            {
                group: 'address',
                type: 'text',
                key: 'Addr_City',
                label: 'City',
                dataBinding:'root_Addr_City',
                value: 'TUALATIN',
                order: 3
            },
            {
                group: 'address',
                type: 'text',
                key: 'Addr_County',
                dataBinding:'root_Addr_County',
                label: 'County',
                order: 4
            },
            {
                group: 'address',
                type: 'text',
                key: 'Addr_ZipCode',
                dataBinding:'root_Addr_ZipCode',
                label: 'Zip Code',
                value: '97062',
                order: 4
            },
            {
                group: 'address',
                type: 'label',
                key: 'Addr_MailingAddress',
                dataBinding:'root_Addr_MailingAddress',
                value: 'Mailing Address differs from Residence?',
                order: 5
            },
            {
                group: 'address',
                type: 'radio',
                key: 'mailingYes',
                label: 'Yes',
                dataBinding:'root_Addr_MailingInd',
                value: 'true',
                order: 6
            },
            {
                group: 'address',
                type: 'radio',
                key: 'mailingNo',
                label: 'No',
                dataBinding:'root_Addr_MailingIndNo',
                value: 'false',
                order: 6
            },
            {
                group: 'customer',
                type: 'text',
                key: 'FirstName',
                required: 'true',
                label: 'First Name',
                dataBinding:'root_FirstName',
                value: 'Peter',
                order: 1
            },
            {
                group: 'customer',
                type: 'text',
                key: 'LastName',
                label: 'Last Name',
                dataBinding:'root_LastName',                
                value: 'Andrews',
                disallow:'true',
                order: 2
            },
            {
                group: 'customer',
                type: 'text',
                key: 'HomePhone',
                label: 'Home Phone',
                dataBinding:'root_HomePhone',
                value: '(555)555-5666',
                order: 3
            },
            {
                group: 'customer',
                type: 'label',
                key: 'HomeOrMobile',
                dataBinding:'root_HomeOrMobile',
                value: 'and/or',
                order: 4
            },
            {
                group: 'customer',
                type: 'text',
                key: 'MobilePhone',
                dataBinding:'root_MobilePhone',
                label: 'Mobile Phone',
                order: 5
            },
            {
                group: 'customer',
                type: 'text',
                key: 'EmailAddress',
                dataBinding:'root_EmailAddress',
                label: 'Email Address',
                order: 6
            }
        ];
    }
}