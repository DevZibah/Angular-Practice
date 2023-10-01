import { Pipe, PipeTransform } from '@angular/core';

// decorate the class with the pipe decorator
@Pipe({
  // this is the pipe's name we'll use when we reference the pipe in the HTML template
  name: 'convertToSpaces',
})
// implement the PipeTransform Interface
export class ConvertToSpacesPipe implements PipeTransform {
  // transform is a method defines the string value to transform as the first params and the character string to use in the transformaton as the second params
  transform(value: string, character: string): string {
    // this return statement replaces any of the specified characters to space. in this case: '-' to ''
    return value.replace(character, ' ');
  }
}
