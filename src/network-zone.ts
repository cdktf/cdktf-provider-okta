// https://www.terraform.io/docs/providers/okta/r/network_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Format of each array value: a string representation of an ASN numeric value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/network_zone.html#asns NetworkZone#asns}
  */
  readonly asns?: string[];
  /**
  * Array of locations ISO-3166-1(2). Format code: countryCode OR countryCode-regionCode
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/network_zone.html#dynamic_locations NetworkZone#dynamic_locations}
  */
  readonly dynamicLocations?: string[];
  /**
  * Type of proxy being controlled by this network zone
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/network_zone.html#dynamic_proxy_type NetworkZone#dynamic_proxy_type}
  */
  readonly dynamicProxyType?: string;
  /**
  * Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/network_zone.html#gateways NetworkZone#gateways}
  */
  readonly gateways?: string[];
  /**
  * Name of the Network Zone Resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/network_zone.html#name NetworkZone#name}
  */
  readonly name: string;
  /**
  * Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/network_zone.html#proxies NetworkZone#proxies}
  */
  readonly proxies?: string[];
  /**
  * Type of the Network Zone - can either be IP or DYNAMIC only
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/network_zone.html#type NetworkZone#type}
  */
  readonly type: string;
  /**
  * Zone's purpose: POLICY or BLOCKLIST
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/network_zone.html#usage NetworkZone#usage}
  */
  readonly usage?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/network_zone.html okta_network_zone}
*/
export class NetworkZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_network_zone";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/network_zone.html okta_network_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkZoneConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_network_zone',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._asns = config.asns;
    this._dynamicLocations = config.dynamicLocations;
    this._dynamicProxyType = config.dynamicProxyType;
    this._gateways = config.gateways;
    this._name = config.name;
    this._proxies = config.proxies;
    this._type = config.type;
    this._usage = config.usage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asns - computed: false, optional: true, required: false
  private _asns?: string[]; 
  public get asns() {
    return this.getListAttribute('asns');
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
    return this.getListAttribute('dynamic_locations');
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
    return this.getListAttribute('gateways');
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
  public get id() {
    return this.getStringAttribute('id');
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
    return this.getListAttribute('proxies');
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
      asns: cdktf.listMapper(cdktf.stringToTerraform)(this._asns),
      dynamic_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._dynamicLocations),
      dynamic_proxy_type: cdktf.stringToTerraform(this._dynamicProxyType),
      gateways: cdktf.listMapper(cdktf.stringToTerraform)(this._gateways),
      name: cdktf.stringToTerraform(this._name),
      proxies: cdktf.listMapper(cdktf.stringToTerraform)(this._proxies),
      type: cdktf.stringToTerraform(this._type),
      usage: cdktf.stringToTerraform(this._usage),
    };
  }
}
