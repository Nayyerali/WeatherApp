import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import AppColors from '../../helpers/AppColors';
import AppFontSize from '../../helpers/AppFontSize';
import AppFontFamily from '../../helpers/AppFontFamily';

export const PrimaryDropDown = ({
  options = [],
  setSelected = () => {},
  addConStyles = {},
  placeholder = '',
  save = 'value',
}) => {
  return (
    <View style={[styles.container, addConStyles]}>
      <SelectList
        setSelected={val => setSelected(val)}
        data={options}
        save={save}
        search={false}
        placeholder={'Select City'}
        boxStyles={styles.boxStyles}
        inputStyles={styles.inputStyles}
        dropdownStyles={styles.dropdownStyles}
        dropdownTextStyles={styles.dropdownTextStyles}
        fontFamily={AppFontFamily.semiBold}
        maxHeight={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
  },
  title: {
    marginVertical: 5,
    color: AppColors.primaryBlue,
    fontSize: AppFontSize.size14,
    fontFamily: AppFontFamily.semiBold,
  },
  dropdownTextStyles: {
    borderBottomWidth: 1,
    color: AppColors.gray,
    borderBottomColor: AppColors.transparent,
  },
  dropdownStyles: {
    borderWidth: 1,
    backgroundColor: AppColors.white,
    borderColor: AppColors.gray,
    borderRadius: 6,
  },
  inputStyles: {
    color: AppColors.gray,
  },
  boxStyles: {
    borderWidth: 1,
    backgroundColor: AppColors.white,
    borderColor: AppColors.gray,
    borderRadius: 6,
  },
});
