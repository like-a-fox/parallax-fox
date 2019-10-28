export const email_regex_str = '\\S+@\\S+\\.\\S+';
export const empty_regex_str = '[A-Za-z0-9]{1,20}';
export const email_regex = new RegExp(email_regex_str);
export const empty_regex = new RegExp(empty_regex_str);
