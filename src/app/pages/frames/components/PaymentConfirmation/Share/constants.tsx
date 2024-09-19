import { PaymentConfirmationShareIcons } from 'app/util/constants';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { IconType } from 'react-icons';
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io';

export type IconsDictionary = { [key: string]: IconType };

export const DATALOGIC_OPTIONS_OUTLINED_ICONS: IconsDictionary = {
  [PaymentConfirmationShareIcons.Whatsapp]: AiOutlineWhatsApp,
};
export const ALL_OPTIONS_OUTLINED_ICONS: IconsDictionary = {
  [PaymentConfirmationShareIcons.Mail]: AiOutlineMail,
  [PaymentConfirmationShareIcons.Whatsapp]: AiOutlineWhatsApp,
};

export const DATALOGIC_OPTIONS_SOLID_ICONS: IconsDictionary = {
  [PaymentConfirmationShareIcons.Whatsapp]: IoLogoWhatsapp,
};
export const ALL_OPTIONS_SOLID_ICONS: IconsDictionary = {
  [PaymentConfirmationShareIcons.Mail]: IoMdMail,
  [PaymentConfirmationShareIcons.Whatsapp]: IoLogoWhatsapp,
};

export const tRootShare = 'iFrame.confirmation.common.share';
