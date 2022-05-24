// https://www.terraform.io/docs/providers/okta/d/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/user#id DataOktaUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Retrieve a single user based on their id
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/user#user_id DataOktaUser#user_id}
  */
  readonly userId?: string;
  /**
  * search block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/user#search DataOktaUser#search}
  */
  readonly search?: DataOktaUserSearch[] | cdktf.IResolvable;
}
export interface DataOktaUserSearch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/user#comparison DataOktaUser#comparison}
  */
  readonly comparison?: string;
  /**
  * Property name to search for. This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/user#name DataOktaUser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/user#value DataOktaUser#value}
  */
  readonly value: string;
}

export function dataOktaUserSearchToTerraform(struct?: DataOktaUserSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataOktaUserSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOktaUserSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaUserSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataOktaUserSearchList extends cdktf.ComplexList {
  public internalValue? : DataOktaUserSearch[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOktaUserSearchOutputReference {
    return new DataOktaUserSearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/user okta_user}
*/
export class DataOktaUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/user okta_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_user',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.20.8',
        providerVersionConstraint: '~> 3.20.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._userId = config.userId;
    this._search.internalValue = config.search;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_roles - computed: true, optional: false, required: false
  public get adminRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_roles'));
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // cost_center - computed: true, optional: false, required: false
  public get costCenter() {
    return this.getStringAttribute('cost_center');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // custom_profile_attributes - computed: true, optional: false, required: false
  public get customProfileAttributes() {
    return this.getStringAttribute('custom_profile_attributes');
  }

  // department - computed: true, optional: false, required: false
  public get department() {
    return this.getStringAttribute('department');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // division - computed: true, optional: false, required: false
  public get division() {
    return this.getStringAttribute('division');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // employee_number - computed: true, optional: false, required: false
  public get employeeNumber() {
    return this.getStringAttribute('employee_number');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // group_memberships - computed: true, optional: false, required: false
  public get groupMemberships() {
    return cdktf.Fn.tolist(this.getListAttribute('group_memberships'));
  }

  // honorific_prefix - computed: true, optional: false, required: false
  public get honorificPrefix() {
    return this.getStringAttribute('honorific_prefix');
  }

  // honorific_suffix - computed: true, optional: false, required: false
  public get honorificSuffix() {
    return this.getStringAttribute('honorific_suffix');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // login - computed: true, optional: false, required: false
  public get login() {
    return this.getStringAttribute('login');
  }

  // manager - computed: true, optional: false, required: false
  public get manager() {
    return this.getStringAttribute('manager');
  }

  // manager_id - computed: true, optional: false, required: false
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }

  // middle_name - computed: true, optional: false, required: false
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }

  // mobile_phone - computed: true, optional: false, required: false
  public get mobilePhone() {
    return this.getStringAttribute('mobile_phone');
  }

  // nick_name - computed: true, optional: false, required: false
  public get nickName() {
    return this.getStringAttribute('nick_name');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // postal_address - computed: true, optional: false, required: false
  public get postalAddress() {
    return this.getStringAttribute('postal_address');
  }

  // preferred_language - computed: true, optional: false, required: false
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }

  // primary_phone - computed: true, optional: false, required: false
  public get primaryPhone() {
    return this.getStringAttribute('primary_phone');
  }

  // profile_url - computed: true, optional: false, required: false
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }

  // second_email - computed: true, optional: false, required: false
  public get secondEmail() {
    return this.getStringAttribute('second_email');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // street_address - computed: true, optional: false, required: false
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }

  // zip_code - computed: true, optional: false, required: false
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }

  // search - computed: false, optional: true, required: false
  private _search = new DataOktaUserSearchList(this, "search", true);
  public get search() {
    return this._search;
  }
  public putSearch(value: DataOktaUserSearch[] | cdktf.IResolvable) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      user_id: cdktf.stringToTerraform(this._userId),
      search: cdktf.listMapper(dataOktaUserSearchToTerraform)(this._search.internalValue),
    };
  }
}
