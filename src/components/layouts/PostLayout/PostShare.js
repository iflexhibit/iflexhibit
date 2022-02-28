import Button from "components/Button";
import IconButton from "components/IconButton";
import CopyIcon from "components/icons/CopyIcon";
import FacebookIcon from "components/icons/FacebookIcon";
import RedditIcon from "components/icons/RedditIcon";
import TwitterIcon from "components/icons/TwitterIcon";
import { useState } from "react";
import styles from "styles/layouts/PostLayout.module.scss";

export const PostShare = ({ shareUrl, shareText }) => {
  const [isCopyDisabled, setCopyDisabled] = useState(false);
  const handleCopyClipboard = () => {
    setCopyDisabled(true);
    navigator.clipboard.writeText(shareUrl);
    setTimeout(() => setCopyDisabled(false), 2000);
  };
  return (
    <div className={styles.share}>
      <div className={styles.row}>
        <span>Share on:</span>
        <div className={styles.icons}>
          <a
            href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className={styles.icon}
          >
            <FacebookIcon />
          </a>
          <a
            href={`https://twitter.com/intent/tweet/?text=${shareText}&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
            className={styles.icon}
          >
            <TwitterIcon />
          </a>
          <a
            href={`https://reddit.com/submit/?url=${shareUrl}&title=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Reddit"
            className={styles.icon}
          >
            <RedditIcon />
          </a>
          <IconButton
            icon={<CopyIcon />}
            onClick={handleCopyClipboard}
            disabled={isCopyDisabled}
          />
        </div>
      </div>
    </div>
  );
};
