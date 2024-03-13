export class CustomDate {
    private date: Date;
    private months: string[] = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
  
    constructor(dateString: string) {
      this.date = new Date(dateString);
    }
  
    parseTime(): string {
      const hours = this.date.getHours().toString().padStart(2, '0');
      const minutes = this.date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }

    getTheDay(): string{
      const day = this.date.getDate();
      const month = this.date.getMonth();

      return `${this.months[month]} ${day}, 2024`;
      
    }
  
    parseDate(): number {
      return this.date.getDate();
    }

    getTimeDifference(start: Date, end: Date): { hours: number, minutes: number } {
        // Calculate the difference in milliseconds
        const timeDifference = Math.abs(end.getTime() - start.getTime());
        
        // Convert milliseconds to hours and minutes
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    
        return { hours, minutes };
    }
  }
  