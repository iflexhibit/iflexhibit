import React from "react";
import styles from "styles/ReportModal.module.scss";
import Button from "./Button";
import IconButton from "./IconButton";
import TimesIcon from "./icons/TimesIcon";
import Select from "./Select";
import TextArea from "./TextArea";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCommentOffenses,
  fetchPostOffenses,
  fetchUserOffenses,
  submitReport,
} from "redux/actions/reportAction";
import { useEffect } from "react";
import { useState } from "react";

const ReportModal = ({ closeModal, reportType, targetId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentOffenses());
    dispatch(fetchPostOffenses());
    dispatch(fetchUserOffenses());
  }, []);

  const { commentOffenses, postOffenses, userOffenses } = useSelector(
    (state) => state.report
  );

  const offenses = (type) => {
    switch (type) {
      case "COMMENT":
        return commentOffenses;
      case "POST":
        return postOffenses;
      case "USER":
        return userOffenses;
      default:
        return [];
    }
  };

  const [note, setNote] = useState("");
  const [offense, setOffense] = useState(offenses(reportType)[0].id);

  const handleReport = () => {
    setNote("");
    dispatch(submitReport(reportType, targetId, offense, note));
    closeModal();
  };

  return (
    <div className={styles.report}>
      <button className={styles.underlay} onClick={closeModal}></button>
      <div className={styles.menu}>
        <div className={styles.header}>
          <b>REPORT THIS {reportType}</b>
          <IconButton
            icon={<TimesIcon />}
            variant="secondary"
            onClick={closeModal}
          />
        </div>
        <div className={styles.body}>
          {offenses(reportType) && (
            <Select
              options={offenses(reportType).map((offense) => ({
                label: offense.title,
                value: offense.id,
              }))}
              value={offense}
              onChange={(e) => setOffense(e.target.value)}
              fullWidth
            />
          )}
          <TextArea
            id="note"
            fullHeight
            placeholder="Tell us more about your report"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className={styles.footer}>
          <small>
            Learn more about our{" "}
            <Link href="/legal">
              <a>
                <b>Terms of Service</b>
              </a>
            </Link>
            .
          </small>
          <Button
            fullWidth
            variant="primary"
            label="Submit Report"
            onClick={handleReport}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
