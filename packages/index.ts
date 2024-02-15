import { App } from 'vue';

import SaltTitleBar from './bar/TitleBar.vue';
import SaltBottomBar from './bar/BottomBar.vue';
import SaltBottomBarItem from './bar/BottomBarItem.vue';

import SaltTextButton from './button/TextButton.vue';
import SaltBasicButton from './button/BasicButton.vue';
import SaltSwitchButton from './button/SwitchButton.vue';

import SaltItemTitle from './item/ItemTitle.vue';
import SaltItemText from './item/ItemText.vue';
import SaltItem from './item/Item.vue';
import SaltItemSwitcher from './item/ItemSwitcher.vue';
// import SaltItemPopup from './item/ItemPopup.vue';
import SaltItemCheck from './item/ItemCheck.vue';
import SaltItemValue from './item/ItemValue.vue';
import SaltItemEdit from './item/ItemEdit.vue';
import SaltItemEditPassword from './item/ItemEditPassword.vue';
import SaltItemSlider from './item/ItemSlider.vue';
import SaltItemSpacer from './item/ItemSpacer.vue';
import SaltItemContainer from './item/ItemContainer.vue';
import SaltItemOutSpacer from './item/ItemOutSpacer.vue';
import SaltItemOutHalfSpacer from './item/ItemOutHalfSpacer.vue';

import SaltItemOuterTitle from './item-outer/ItemOuterTitle.vue';
import SaltItemOuterLargeTitle from './item-outer/ItemOuterLargeTitle.vue';
import SaltItemOuter from './item-outer/ItemOuter.vue';
import SaltItemOuterTextButton from './item-outer/ItemOuterTextButton.vue';

import SaltRoundedColumn from './rounded-column/RoundedColumn.vue';

import SaltSlider from './slider/Slider.vue';

// import SaltColumnBottomSheetDialog from './dialog/ColumnBottomSheetDialog.vue';
import SaltYesDialog from './dialog/YesDialog.vue';
import SaltYesNoDialog from './dialog/YesNoDialog.vue';
import SaltInputDialog from './dialog/InputDialog.vue';
import SaltBasicDialog from './dialog/BasicDialog.vue';
import SlatDialogTitle from './dialog/DialogTitle.vue';

import SaltIcon from './icon/Icon.vue';
import SaltRippleEffect from './ripple/RippleEffect.vue';

export {
    SaltTitleBar, SaltBottomBar, SaltBottomBarItem,
    SaltTextButton, SaltBasicButton, SaltSwitchButton,
    SaltItemTitle, SaltItemText, SaltItem, SaltItemSwitcher, SaltItemCheck, SaltItemValue, SaltItemEdit, SaltItemEditPassword, SaltItemSlider, SaltItemSpacer, SaltItemContainer,
    SaltItemOuterTitle, SaltItemOuterLargeTitle, SaltItemOuter, SaltItemOuterTextButton, SaltItemOutSpacer, SaltItemOutHalfSpacer,
    SaltRoundedColumn,
    SaltSlider,
    SaltYesDialog, SaltYesNoDialog, SaltInputDialog, SaltBasicDialog, SlatDialogTitle,
    SaltIcon, SaltRippleEffect
};

const components = [
    SaltTitleBar, SaltBottomBar, SaltBottomBarItem,
    SaltTextButton,
    SaltItemTitle, SaltItemText, SaltItem, SaltItemSwitcher, SaltItemCheck, SaltItemValue, SaltItemEdit, SaltItemEditPassword, SaltItemSlider, SaltItemSpacer, SaltItemContainer,
    SaltItemOuterTitle, SaltItemOuterLargeTitle, SaltItemOuter, SaltItemOuterTextButton, SaltItemOutSpacer, SaltItemOutHalfSpacer,
    SaltRoundedColumn,
    SaltSlider,
    SaltYesDialog, SaltYesNoDialog, SaltInputDialog, SaltBasicDialog, SlatDialogTitle,
    SaltIcon, SaltRippleEffect
];

const SaltUI = {
    install(app: App) {
        components.forEach(component => {
            app.component('Salt' + component.__name, component);
        });
    }
}

export default SaltUI;