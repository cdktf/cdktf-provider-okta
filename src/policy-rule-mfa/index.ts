/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRuleMfaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#enroll PolicyRuleMfa#enroll}
  */
  readonly enroll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy Rule Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}
  */
  readonly name: string;
  /**
  * Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#network_connection PolicyRuleMfa#network_connection}
  */
  readonly networkConnection?: string;
  /**
  * The zones to exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#network_excludes PolicyRuleMfa#network_excludes}
  */
  readonly networkExcludes?: string[];
  /**
  * The zones to include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#network_includes PolicyRuleMfa#network_includes}
  */
  readonly networkIncludes?: string[];
  /**
  * Policy ID of the Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#policy_id PolicyRuleMfa#policy_id}
  */
  readonly policyId?: string;
  /**
  * Policy Rule Priority, this attribute can be set to a valid priority. To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#priority PolicyRuleMfa#priority}
  */
  readonly priority?: number;
  /**
  * Policy Rule Status: ACTIVE or INACTIVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#status PolicyRuleMfa#status}
  */
  readonly status?: string;
  /**
  * Set of User IDs to Exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#users_excluded PolicyRuleMfa#users_excluded}
  */
  readonly usersExcluded?: string[];
  /**
  * app_exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#app_exclude PolicyRuleMfa#app_exclude}
  */
  readonly appExclude?: PolicyRuleMfaAppExclude[] | cdktf.IResolvable;
  /**
  * app_include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#app_include PolicyRuleMfa#app_include}
  */
  readonly appInclude?: PolicyRuleMfaAppInclude[] | cdktf.IResolvable;
}
export interface PolicyRuleMfaAppExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}
  */
  readonly type: string;
}

export function policyRuleMfaAppExcludeToTerraform(struct?: PolicyRuleMfaAppExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class PolicyRuleMfaAppExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleMfaAppExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleMfaAppExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PolicyRuleMfaAppExcludeList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleMfaAppExclude[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleMfaAppExcludeOutputReference {
    return new PolicyRuleMfaAppExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRuleMfaAppInclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}
  */
  readonly type: string;
}

export function policyRuleMfaAppIncludeToTerraform(struct?: PolicyRuleMfaAppInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class PolicyRuleMfaAppIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleMfaAppInclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleMfaAppInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PolicyRuleMfaAppIncludeList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleMfaAppInclude[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleMfaAppIncludeOutputReference {
    return new PolicyRuleMfaAppIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa okta_policy_rule_mfa}
*/
export class PolicyRuleMfa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_policy_rule_mfa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyRuleMfa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyRuleMfa to import
  * @param importFromId The id of the existing PolicyRuleMfa that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyRuleMfa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_policy_rule_mfa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/policy_rule_mfa okta_policy_rule_mfa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRuleMfaConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRuleMfaConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_rule_mfa',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.5.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enroll = config.enroll;
    this._id = config.id;
    this._name = config.name;
    this._networkConnection = config.networkConnection;
    this._networkExcludes = config.networkExcludes;
    this._networkIncludes = config.networkIncludes;
    this._policyId = config.policyId;
    this._priority = config.priority;
    this._status = config.status;
    this._usersExcluded = config.usersExcluded;
    this._appExclude.internalValue = config.appExclude;
    this._appInclude.internalValue = config.appInclude;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enroll - computed: false, optional: true, required: false
  private _enroll?: string; 
  public get enroll() {
    return this.getStringAttribute('enroll');
  }
  public set enroll(value: string) {
    this._enroll = value;
  }
  public resetEnroll() {
    this._enroll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollInput() {
    return this._enroll;
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

  // network_connection - computed: false, optional: true, required: false
  private _networkConnection?: string; 
  public get networkConnection() {
    return this.getStringAttribute('network_connection');
  }
  public set networkConnection(value: string) {
    this._networkConnection = value;
  }
  public resetNetworkConnection() {
    this._networkConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectionInput() {
    return this._networkConnection;
  }

  // network_excludes - computed: false, optional: true, required: false
  private _networkExcludes?: string[]; 
  public get networkExcludes() {
    return this.getListAttribute('network_excludes');
  }
  public set networkExcludes(value: string[]) {
    this._networkExcludes = value;
  }
  public resetNetworkExcludes() {
    this._networkExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExcludesInput() {
    return this._networkExcludes;
  }

  // network_includes - computed: false, optional: true, required: false
  private _networkIncludes?: string[]; 
  public get networkIncludes() {
    return this.getListAttribute('network_includes');
  }
  public set networkIncludes(value: string[]) {
    this._networkIncludes = value;
  }
  public resetNetworkIncludes() {
    this._networkIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIncludesInput() {
    return this._networkIncludes;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // users_excluded - computed: false, optional: true, required: false
  private _usersExcluded?: string[]; 
  public get usersExcluded() {
    return cdktf.Fn.tolist(this.getListAttribute('users_excluded'));
  }
  public set usersExcluded(value: string[]) {
    this._usersExcluded = value;
  }
  public resetUsersExcluded() {
    this._usersExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersExcludedInput() {
    return this._usersExcluded;
  }

  // app_exclude - computed: false, optional: true, required: false
  private _appExclude = new PolicyRuleMfaAppExcludeList(this, "app_exclude", true);
  public get appExclude() {
    return this._appExclude;
  }
  public putAppExclude(value: PolicyRuleMfaAppExclude[] | cdktf.IResolvable) {
    this._appExclude.internalValue = value;
  }
  public resetAppExclude() {
    this._appExclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appExcludeInput() {
    return this._appExclude.internalValue;
  }

  // app_include - computed: false, optional: true, required: false
  private _appInclude = new PolicyRuleMfaAppIncludeList(this, "app_include", true);
  public get appInclude() {
    return this._appInclude;
  }
  public putAppInclude(value: PolicyRuleMfaAppInclude[] | cdktf.IResolvable) {
    this._appInclude.internalValue = value;
  }
  public resetAppInclude() {
    this._appInclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIncludeInput() {
    return this._appInclude.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enroll: cdktf.stringToTerraform(this._enroll),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_connection: cdktf.stringToTerraform(this._networkConnection),
      network_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkExcludes),
      network_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkIncludes),
      policy_id: cdktf.stringToTerraform(this._policyId),
      priority: cdktf.numberToTerraform(this._priority),
      status: cdktf.stringToTerraform(this._status),
      users_excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usersExcluded),
      app_exclude: cdktf.listMapper(policyRuleMfaAppExcludeToTerraform, true)(this._appExclude.internalValue),
      app_include: cdktf.listMapper(policyRuleMfaAppIncludeToTerraform, true)(this._appInclude.internalValue),
    };
  }
}
