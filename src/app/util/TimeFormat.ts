import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertFrom24To12Format' })
export class TimeFormat implements PipeTransform {
  transform(time: any): any {
    var time24To12 = function (a) {
      return (new Date("1955-11-05T" + a + "Z")).toLocaleTimeString("bestfit", {
        timeZone: "UTC",
        hour12: !0,
        hour: "numeric",
        minute: "numeric"
      });
    };
    return time24To12(time);
  }
}