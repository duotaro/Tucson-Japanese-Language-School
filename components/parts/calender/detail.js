


import React, { useContext } from "react";
import LocaleContext from "../../context/localeContext";
import { generateGoogleCalendarUrl, downloadICalFile } from "../../../utils/calendarUtils";

export default function CalenderDetail({ schedule }) {
  const { locale } = useContext(LocaleContext);

  const isJpn = locale == "ja"

  // Googleカレンダーに追加
  const addToGoogleCalendar = () => {
    const url = generateGoogleCalendarUrl(schedule);
    window.open(url, '_blank');
  };

  // iCalendarファイルダウンロード
  const addToICalendar = () => {
    downloadICalFile(schedule);
  };

  return (
	<div class="row row-striped" key={schedule.title}>
        <div class="col-2 text-right">
            <h3 class=""><span class="badge bg-primary">{schedule.day} {isJpn && (<span></span>)}</span></h3>
            <h3>{schedule.month}{isJpn && (<span>月</span>)}</h3>
        </div>
        <div class="col-10">
            <h3 class="text-uppercase"><strong>{schedule.title}</strong></h3>
            <ul class="list-inline">
                <li class="list-inline-item"><i class="bi bi-calendar3"></i> {schedule.dayName}</li>
                <li class="list-inline-item"><i class="bi bi-clock"></i> {schedule.startTime || schedule.start} - {schedule.endTime || schedule.end}</li>
                <li class="list-inline-item"><i class="bi bi-geo-alt"></i><a href={`https://www.google.com/maps?q=${schedule.location}`} target="_blank">{schedule.location}</a></li>
            </ul>
            {schedule.text && (
                <>
                {schedule.link && (
                    <a href={schedule.link} className="card p-3 text-decoration-none " target="_blank">{schedule.text}</a>
                )}
                {!schedule.link && (
                    <p className="card p-3">{schedule.text}</p>
                )}
                </>
            )}
            
            {/* カレンダー追加ボタン */}
            <div className="mt-3">
                <button 
                    onClick={addToGoogleCalendar}
                    className="btn btn-sm btn-outline-primary me-2"
                    title={isJpn ? "Googleカレンダー" : "Google Calendar"}
                >
                    <i className="bi bi-google me-1"></i>
                    {isJpn ? "Googleカレンダー" : "Google Calendar"}
                </button>
                <button 
                    onClick={addToICalendar}
                    className="btn btn-sm btn-outline-secondary"
                    title={isJpn ? "iCalendar" : "iCalendar"}
                >
                    <i className="bi bi-calendar-plus me-1"></i>
                    {isJpn ? "iCalendar" : "iCalendar"}
                </button>
            </div>
        </div>
    </div>
  );
}