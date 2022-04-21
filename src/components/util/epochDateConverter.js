import {format} from 'date-fns';

/**Takes epoch date in seconds, removes timezoneOffset. Second arg is the template for date-fns (default is 'P'). Returns formatted date. */
export const epochDateConverter = (date, template) => {
    const dt = new Date(date * 1000);
    const dtDateOnly = new Date(
      dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000,
    );
    const formatDate = format(dtDateOnly, template ?? 'P');
  
    return formatDate;
  };