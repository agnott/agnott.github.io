class Time {
  diff(time, now = Date.now()) {
    const diff = (now - time) / 1000;
    return {
      seconds: Math.floor(diff),
      minutes: Math.floor(diff / 60),
      hours:   Math.floor(diff / 60 / 60),
      days:    Math.floor(diff / 60 / 60 / 24),
      weeks:   Math.floor(diff / 60 / 60 / 24 / 7),
    };
  }

  since(time, now = Date.now()) {
    const diffs = this.diff(time, now);

    if (diffs.seconds < 60) return `${diffs.seconds} ${diffs.seconds === 1 ? 'second' : 'seconds'} ago`;
    if (diffs.minutes < 60) return `${diffs.minutes} ${diffs.minutes === 1 ? 'minute' : 'minutes'} ago`;
    if (diffs.hours < 24) return `${diffs.hours} ${diffs.hours === 1 ? 'hour' : 'hours'} ago`;
    if (diffs.days < 7) return `${diffs.days} ${diffs.days === 1 ? 'day' : 'days'} ago`;
    if (diffs.weeks < 3) return `${diffs.weeks} ${diffs.weeks === 1 ? 'week' : 'weeks'} ago`;

    return time.toLocaleDateString();
  }
}

export default new Time();
