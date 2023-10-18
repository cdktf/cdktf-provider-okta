/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Format of each array value: a string representation of an ASN numeric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone#asns NetworkZone#asns}
  */
  readonly asns?: string[];
  /**
  * Array of locations ISO-3166-1(2). Format code: countryCode OR countryCode-regionCode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone#dynamic_locations NetworkZone#dynamic_locations}
  */
  readonly dynamicLocations?: string[];
  /**
  * Type of proxy being controlled by this network zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone#dynamic_proxy_type NetworkZone#dynamic_proxy_type}
  */
  readonly dynamicProxyType?: string;
  /**
  * Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone#gateways NetworkZone#gateways}
  */
  readonly gateways?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone#id NetworkZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Network Zone Resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone#name NetworkZone#name}
  */
  readonly name: string;
  /**
  * Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone#proxies NetworkZone#proxies}
  */
  readonly proxies?: string[];
  /**
  * Network Status - can either be ACTIVE or INACTIVE only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone#status NetworkZone#status}
  */
  readonly status?: string;
  /**
  * Type of the Network Zone - can either be IP or DYNAMIC only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone#type NetworkZone#type}
  */
  readonly type: string;
  /**
  * Zone's purpose: POLICY or BLOCKLIST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone#usage NetworkZone#usage}
  */
  readonly usage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone okta_network_zone}
*/
export class NetworkZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_network_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkZone to import
  * @param importFromId The id of the existing NetworkZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_network_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/network_zone okta_network_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkZoneConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_network_zone',
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
    this._asns = config.asns;
    this._dynamicLocations = config.dynamicLocations;
    this._dynamicProxyType = config.dynamicProxyType;
    this._gateways = config.gateways;
    this._id = config.id;
    this._name = config.name;
    this._proxies = config.proxies;
    this._status = config.status;
    this._type = config.type;
    this._usage = config.usage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asns - computed: false, optional: true, required: false
  private _asns?: string[]; 
  public get asns() {
    return cdktf.Fn.tolist(this.getListAttribute('asns'));
  }
  public set asns(value: string[]) {
    this._asns = value;
  }
  public resetAsns() {
    this._asns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnsInput() {
    return this._asns;
  }

  // dynamic_locations - computed: false, optional: true, required: false
  private _dynamicLocations?: string[]; 
  public get dynamicLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('dynamic_locations'));
  }
  public set dynamicLocations(value: string[]) {
    this._dynamicLocations = value;
  }
  public resetDynamicLocations() {
    this._dynamicLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicLocationsInput() {
    return this._dynamicLocations;
  }

  // dynamic_proxy_type - computed: false, optional: true, required: false
  private _dynamicProxyType?: string; 
  public get dynamicProxyType() {
    return this.getStringAttribute('dynamic_proxy_type');
  }
  public set dynamicProxyType(value: string) {
    this._dynamicProxyType = value;
  }
  public resetDynamicProxyType() {
    this._dynamicProxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProxyTypeInput() {
    return this._dynamicProxyType;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string[]; 
  public get gateways() {
    return cdktf.Fn.tolist(this.getListAttribute('gateways'));
  }
  public set gateways(value: string[]) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
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

  // proxies - computed: false, optional: true, required: false
  private _proxies?: string[]; 
  public get proxies() {
    return cdktf.Fn.tolist(this.getListAttribute('proxies'));
  }
  public set proxies(value: string[]) {
    this._proxies = value;
  }
  public resetProxies() {
    this._proxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiesInput() {
    return this._proxies;
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

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._asns),
      dynamic_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynamicLocations),
      dynamic_proxy_type: cdktf.stringToTerraform(this._dynamicProxyType),
      gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gateways),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proxies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proxies),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      usage: cdktf.stringToTerraform(this._usage),
    };
  }
}
